"use client";

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, finishInitialLoad, setSuperUser } from '@/redux/features/authSlice';
import { useRetrieveUserQuery, useVerifyMutation } from '@/redux/features/authApiSlice';

export default function useVerify() {
	const dispatch = useAppDispatch();

	const [verify] = useVerifyMutation();
	const { data } = useRetrieveUserQuery()



	useEffect(() => {
		verify(undefined)
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				if (data?.is_superuser) {
					console.log("super")
					dispatch(setSuperUser())
				}
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	}, []);
}