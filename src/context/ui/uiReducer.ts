import { UIState } from '.';

type UIActionType = { type: '[UI] - togge menu' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case '[UI] - togge menu':
			return {
				...state,
				isMenuOpen: !state.isMenuOpen
			};
		default:
			return state;
	}
};
