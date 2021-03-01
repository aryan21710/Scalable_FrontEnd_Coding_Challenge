import React from 'react';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Table from '../components/Table';
import { styles } from './styles';
import { Box } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';


const AppRoutes = () => (
	<BrowserRouter>
		<Box style={styles.mainWrapper}>
			<Header/>
            <Menu/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/table" component={() => <Table />} />
			</Switch>
			<Footer/>
		</Box>
	</BrowserRouter>
);

export default AppRoutes;
