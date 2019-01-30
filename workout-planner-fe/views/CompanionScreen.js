import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Model from '../components/Model';
import { Container, Content } from 'native-base';
import { ListItem, CheckBox } from 'react-native-elements';
import axios from 'axios';

const URL = 'https://nc-project-be.herokuapp.com/api/';

export default class CompanionScreen extends React.Component {
	state = {
		isPrivate: true,
		exercises: [],
		checked: [],
		loggedInUser: {},
		appUserAccount: {},
		muscleVals: {
			abdominals: 0,
			biceps: 0,
			calves: 0,
			chest: 0,
			forearms: 0,
			glutes: 0,
			hamstrings: 0,
			lowerback: 0,
			midback: 0,
			quadriceps: 0,
			shoulders: 0,
			obliques: 0,
			triceps: 0,
			upperback: 0
		}
	};

	checkItem = (exercise) => {
		const { checked } = this.state;
		if (!checked.includes(exercise)) {
			this.setState({ checked: [ ...checked, exercise ] });
		} else {
			this.setState({ checked: checked.filter((a) => a !== exercise) });
		}
	};

	calculateMuscleVals = () => {
		const { checked } = this.state;
		const muscleVals = {
			abdominals: 0,
			biceps: 0,
			calves: 0,
			chest: 0,
			forearms: 0,
			glutes: 0,
			hamstrings: 0,
			lowerback: 0,
			midback: 0,
			quadriceps: 0,
			shoulders: 0,
			obliques: 0,
			triceps: 0,
			upperback: 0
		};
		checked.forEach((exercise) => {
			muscleVals[exercise.major_muscle] += 3;
			exercise.minor_muscles.forEach((muscle) => {
				muscleVals[muscle] += 1;
			});
		});
		this.setState({ muscleVals });
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.checked !== this.state.checked) {
			this.calculateMuscleVals();
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 350, marginTop: 10 }}>
					<Model muscleVals={this.state.muscleVals} />
				</View>
				<Container>
					<Content padder>
						<View>
							{this.state.exercises.map((exercise, i) => (
								<ListItem
									key={i}
									title={exercise.title}
									hideChevron
									subtitle={`Major: ${exercise.major_muscle}`}
									leftIcon={
										<CheckBox
											onPress={() => this.checkItem(exercise)}
											checked={this.state.checked.includes(exercise)}
										/>
									}
								/>
							))}
						</View>
					</Content>
				</Container>
				<Button
					title='Complete Workout'
					onPress={() => {
						this.completeWorkout;
						this.props.navigation.navigate('CompletionModal');
					}}
				/>
			</View>
		);
	}

	componentDidMount() {
		const currentWorkout = this.props.navigation.state.params.currentWorkout;
		const appUserAccount = this.props.navigation.state.params.appUserAccount;
		this.setState({ exercises: currentWorkout, appUserAccount });
	}

	completeWorkout = () => {
		this.saveWorkout();
		const username = this.state.appUserAccount.user_name;
		const nameWorkout = `${this.state.appUserAccount.user_name}s_workout${this.state.appUserAccount._id}`;
		console.log(nameWorkout, username);
		axios
			.post(`${URL}/workouts/${nameWorkout}`, {
				completed_by: username
			})
			.catch((err) => {
				console.log(err);
			});
	};

	saveWorkout = () => {
		this.postWorkout();
		const nameWorkout = `${this.state.appUserAccount.user_name}s_workout${this.state.appUserAccount._id}`;
		const username = this.state.appUserAccount.user_name;
		console.log(nameWorkout, username);
		axios.post(`${URL}/workouts/${nameWorkout}/save/${username}`).catch((err) => {
			console.log(err);
		});
	};

	postWorkout = () => {
		const nameWorkout = `${this.state.appUserAccount.user_name}s_workout${this.state.appUserAccount._id}`;
		const username = this.state.appUserAccount.user_name;
		const isPrivate = this.state.isPrivate;
		const exercises = this.state.exercises.map((exercise) => exercise.title);
		console.log(nameWorkout, username, isPrivate, exercises);
		axios
			.post(`${URL}/workouts`, {
				name: nameWorkout,
				exercises: exercises,
				private: isPrivate,
				created_by: username
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
const styles = StyleSheet.create({
	completeWorkout: {
		padding: 10,
		margin: 10,
		fontSize: 24,
		backgroundColor: 'powderblue'
	}
});
