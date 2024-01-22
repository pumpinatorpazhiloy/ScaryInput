// import { createMachine } from "xstate";
import ScaryModal from '../modals/Modal.jsx'
import { DanGlek } from '../pazles/pazles.jsx';
import { SupportUkraine } from '../pazles/pazles.jsx';

const setContent = (process) => {
	switch (process) {
		case 'idle':
			return
		case 'dan':
			return <DanGlek/>;
		case 'bavovna':
			return <SupportUkraine/>;
		case 'russia':
			return <ScaryModal/>;
		default:
			throw new Error(`Unexpected process: ${process}`);
  }
}

export default setContent;


// export const machine = createMachine(
//   {
//     id: "countryStateMachine",
//     initial: "Idle",
//     states: {
//       Idle: {
//         description:
//           "The machine is in the idle state, waiting for user interaction.",
//         on: {
//           buttonPressed: [
//             {
//               target: "Dan",
//               guard: "inline:countryStateMachine.Idle#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Bavovna",
//               guard: "inline:countryStateMachine.Idle#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Russia",
//               guard: "inline:countryStateMachine.Idle#buttonPressed[-1]#guard",
//             },
//           ],
//         },
//       },
//       Dan: {
//         description: "The machine is currently representing the state of Dan.",
//         on: {
//           buttonPressed: [
//             {
//               target: "Russia",
//               guard: "inline:countryStateMachine.Dan#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Bavovna",
//               guard: "inline:countryStateMachine.Dan#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Idle",
//               guard: "inline:countryStateMachine.Dan#buttonPressed[-1]#guard",
//             },
//           ],
//         },
//       },
//       Bavovna: {
//         description:
//           "The machine is currently representing the state of Bavovna.",
//         on: {
//           buttonPressed: [
//             {
//               target: "Dan",
//               guard:
//                 "inline:countryStateMachine.Bavovna#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Russia",
//               guard:
//                 "inline:countryStateMachine.Bavovna#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Idle",
//               guard:
//                 "inline:countryStateMachine.Bavovna#buttonPressed[-1]#guard",
//             },
//           ],
//         },
//       },
//       Russia: {
//         description:
//           "The machine is currently representing the state of Russia.",
//         on: {
//           buttonPressed: [
//             {
//               target: "Dan",
//               guard:
//                 "inline:countryStateMachine.Russia#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Bavovna",
//               guard:
//                 "inline:countryStateMachine.Russia#buttonPressed[-1]#guard",
//             },
//             {
//               target: "Idle",
//               guard:
//                 "inline:countryStateMachine.Russia#buttonPressed[-1]#guard",
//             },
//           ],
//         },
//       },
//     },
//   },
//   {
//     actions: {},
//     actors: {},
//     guards: {
//       "inline:countryStateMachine.Idle#buttonPressed[-1]#guard": (
//         context,
//         event,
//       ) => event.target === "Dan",
//       "inline:countryStateMachine.Dan#buttonPressed[-1]#guard": (
//         context,
//         event,
//       ) => event.target === "Russia",
//       "inline:countryStateMachine.Bavovna#buttonPressed[-1]#guard": (
//         context,
//         event,
//       ) => event.target === "Dan",
//       "inline:countryStateMachine.Russia#buttonPressed[-1]#guard": (
//         context,
//         event,
//       ) => event.target === "Dan",
//     },
//     delays: {},
//   },
// );