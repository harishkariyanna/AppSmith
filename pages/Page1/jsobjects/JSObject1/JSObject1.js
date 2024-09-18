export default {
	addOrder: async()=> {
		const orderId = this.generateRandomID();
		await add_order.run({id: orderId});
		await add_product.run({id: orderId});
		await fetch_order.run();
		await resetWidget({"add_modal"});
		return closeModal({"add_modal"})
	},
	generateRandomID: ()
}