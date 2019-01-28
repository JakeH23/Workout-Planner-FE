import React from 'react';
import { StyleSheet, View, Button, ScrollView, FlatList } from 'react-native';
import Model from '../components/Model';
import { Accordion, Container, Content, Card, CardItem, Text } from 'native-base';

export default class HomeScreen extends React.Component {
	state = {
		workout: [
			{
				_id: '5c49ca1250d50d0d6b09a79f',
				__v: 0,
				title: 'Squat',
				major_muscle: 'Legs',
				content:
					'In strength training, the squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quads (vastus lateralus medialis and intermedius), hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body. Squats are considered a vital exercise for increasing the strength and size of the legs and buttocks, as well as developing core strength. Isometrically, the lower back, the upper back, the abdominals, the trunk muscles, the costal muscles, and the shoulders and arms are all essential to the exercise and thus are trained when squatting with the proper form.',
				created_by: '5c49ca1150d50d0d6b09a798',
				user_name: 'mike',
				created_at: '2016-08-18T12:07:52.389Z',
				minor_muscles: [ 'Abdominals' ]
			},
			{
				_id: '5c49ca1250d50d0d6b09a79b',
				__v: 0,
				title: 'Pull Up',
				major_muscle: 'Lats',
				content:
					"A pull-up is a variety of upper-body compound pulling motions for the purpose of exercise. The most popular current meaning refers to a closed-chain bodyweight movement where the body is suspended by the arms, gripping something, and pulled up with muscular effort. As this happens, the wrists remain in neutral (straight, neither flexed or extended) position, the elbows flex and the shoulder adducts and/or extends to bring the elbows to or sometimes behind the torso. A traditional pull-up relies on upper body strength with no swinging or 'kipping' (using a forceful initial movement of the legs in order to gain momentum). The exercise often targets the latissimus dorsi muscle in the back along with many other assisting muscles.",
				created_by: '5c49ca1150d50d0d6b09a798',
				user_name: 'mike',
				created_at: '2016-08-18T12:07:52.369Z',
				minor_muscles: [ 'Biceps' ]
			}
		]
	};
	render() {
		const { getParam } = this.props.navigation;
		const currentUser = getParam('currentUser');
		console.log('here ====> ', this.state.workout);
		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 350, marginTop: 10 }}>
					<Model />
				</View>
				<ScrollView style={{ flex: 1 }}>
					<Container style={{ height: 150 }}>
						<Content>
							<Card
								dataArray={this.state.workout}
								renderRow={(exercise) => (
									<CardItem>
										<Text>{exercise.title}</Text>
									</CardItem>
								)}
							/>
						</Content>
					</Container>
					<Button
						title='Add Exercise'
						onPress={() => {
							this.props.navigation.navigate('MuscleScreen');
						}}
					/>
					<Button title='View All Exercises' onPress={() => this.props.navigation.navigate('ExerciseList')} />
					<Button
						title='Create an Exercise'
						onPress={() => this.props.navigation.navigate('CreateExerciseForm')}
					/>
					<Button title='Workout Preview' onPress={() => this.props.navigation.navigate('WorkoutPreview')} />
				</ScrollView>
			</View>
		);
	}

	addExerciseToWorkout = (exercise) => {};
}
