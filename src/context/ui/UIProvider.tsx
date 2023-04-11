import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
	isMenuOpen: boolean;
}

const INITIAL_STATE: UIState = {
	isMenuOpen: false
};

type UIProviderProps = {
	children: React.ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps): React.ReactElement => {
	const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

	return <UIContext.Provider value={{ ...state, toggleMenu }}>{children}</UIContext.Provider>;

	function toggleMenu(): void {
		dispatch({
			type: '[UI] - togge menu'
		});
	}
};
