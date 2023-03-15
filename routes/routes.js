const balance = {
	status: 1,
	balance: 10000
}

const debit = {
	"status":1,
	"balance":505.50
}


const router = (app) => {
	app.post("/balance", (request, response) => {
		console.log(request.path, request.ip, request.body, request.headers);
		// example request body
		//{"user_id":1000011, "prd_id": 1}
		// TODO get current balance of user, which user_id get from request body
		// https://doc.kplaycasino.com/en/index.html#6.1
		response.send(balance);
	});
	app.post("/debit", (request, response) => {
		console.log(request.path, request.ip, request.body, request.headers);
		// example request body
		// {"user_id":1000011,"amount":100.00,"prd_id":1,"txn_id":"A00000005","game_id":1005,"table_id":"jimihendrix00000"}
		// TODO minus user balance by this amount, which user_id, and amount from request body
		// Also get txn_id, there'll be credit request for this txn_id
		// Then return status and latest balance
		// https://doc.kplaycasino.com/en/index.html#3.3
		response.send(debit);
	});
	app.post("/credit", (request, response) => {
		console.log(request.path, request.ip, request.body, request.headers);
		// example request body
		// {"user_id":1000011,"amount":195.00,"prd_id":1,"txn_id":"A00000005","is_cancel":0}
		// TODO plus amount to user balance, and save this bet history
		// beware and handle concurrent requests
		// If credit is not received after 10 minutes of debit’s time, we have to use the result API to settle
		// https://doc.kplaycasino.com/en/index.html#7.1
	});

};
export default router;
