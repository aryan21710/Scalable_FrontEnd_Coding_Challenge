import {Iobj} from './tsInterfaces';

export const sum = (a: Array<number>): number => {
	return a.reduce((acc, cum, idx) => {
		return acc + cum;
	}, 0);
};


export const displayObj = (myObj: Iobj): string => {
    const { name, lname, age, profession, jobs } = myObj;
	return `${name}${lname} is ${age} years old. He works as ${profession}. He worked in following companies:- ${jobs}`;
};