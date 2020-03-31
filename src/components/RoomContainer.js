import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer, withRoomConsumer } from '../context'
import Loading from '../components/Loading'

function RoomContainer({context}){
	const { loading, sortedRooms, rooms } = context
				if (loading) {
					return <Loading />
				}
				return (
					<>
						<RoomsFilter rooms={sortedRooms} />
						<RoomsList rooms={rooms} />
					</>
				)
}


export default withRoomConsumer(RoomContainer)















// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
// import Loading from '../components/Loading'

// export default function RoomContainer() {
// 	return (
// 		<RoomConsumer>
// 			{value => {
// 				const { loading, sortedRooms, rooms } = value
// 				if (loading) {
// 					return <Loading />
// 				}
// 				return (
// 					<div>
// 						from roomsContainer
// 						<RoomsList rooms={rooms} />
// 						<RoomsFilter rooms={sortedRooms} />
// 					</div>
// 				)
// 			}}
// 		</RoomConsumer>
// 	)
// }
