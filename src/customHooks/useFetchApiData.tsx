import React, { useEffect } from 'react';
import axios from 'axios';
import { ICone } from '../common/interfaces';
import { APIURL } from '../common/constants';

export const useFetchApiData = async (
    setCone: React.Dispatch<React.SetStateAction<ICone>>,
    riskLevel: number,
    setCones: React.Dispatch<React.SetStateAction<ICone[]>>
): Promise<void> => {
    useEffect(() => {callBackendApi();
    }, [riskLevel]);

    const callBackendApi = async () => {
        try {
            const response = await axios.get(APIURL);
            if (response) {
                const filteredCone: ICone = response.data.filter(
                    (cone: { riskLevel: number }) => cone.riskLevel === riskLevel
                )[0];
                setCone({ ...filteredCone });
                setCones([...response.data]);
            }
        } catch (err) {
            alert(err);
        }
    };
};
