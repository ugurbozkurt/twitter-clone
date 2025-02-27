import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	currentAccount: {
		id: 1,
		username: 'ugurbozkurt_gg',
		fullName: 'Uğur',
		avatar: 'https://pbs.twimg.com/profile_images/1887576524313812992/L_Wraaeo_200x200.jpg',
		isLocked: true,
		notification : 3		
	},
	accounts :[
		{
			id: 1,
			username: 'ugurbozkurt.gg',
			fullName: 'Uğur',
			avatar: 'https://pbs.twimg.com/profile_images/1887576524313812992/L_Wraaeo_200x200.jpg',
			isLocked: true,
			notification : 3	
		},
		{
			id: 2,
			username: 'kallaxgerton',
			fullName: 'Kallax Gerton',
			avatar: 'https://pbs.twimg.com/profile_images/1732578525717073920/d4kgzWMQ_normal.jpg',
			isLocked: true,
			notification : 15	
		}
	]
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
			state.accounts.reverse()
		}
	}
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer
