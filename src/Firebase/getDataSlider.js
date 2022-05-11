import { collection, getDocs } from "firebase/firestore";
import database from "./Firebase";

async function getProductsSlider(setProducts, setLoader) {
	const productsCollection = collection(database, "slider");
	const productDocs = await getDocs(productsCollection);
	setProducts(
		productDocs.docs.map((prod) => ({
			id: prod.id,
			...prod.data(),
		}))
	);
	setLoader(false);
}
export default getProductsSlider;
