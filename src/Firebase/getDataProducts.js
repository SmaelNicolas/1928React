import { collection, getDocs } from "firebase/firestore";
import database from "./Firebase";

async function getProducts(setProducts, setLoader) {
	const productsCollection = collection(database, "productos");
	const productDocs = await getDocs(productsCollection);
	setProducts(
		productDocs.docs.map((prod) => ({
			id: prod.id,
			...prod.data(),
		}))
	);
	setLoader(false);
}
export default getProducts;
