import signale from 'signale';

const run = async(): Promise<void> => {
	signale.info('Hello world!');
};

run().catch(error => {
	console.log(error);
});
