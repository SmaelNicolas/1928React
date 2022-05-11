import { collection, getDocs } from "firebase/firestore";
import database from "./Firebase";

async function getProductsSearched(setProducts, setLoader, query, setExist) {
	const newArray = query.split(" ");
	setLoader(true);
	const productsCollection = collection(database, "productos");
	const productDocs = await getDocs(productsCollection);
	const products = productDocs.docs.map((prod) => ({
		id: prod.id,
		...prod.data(),
	}));
	const productsSearched = newArray.map((word) => {
		return products.map((prod) => {
			return prod.description.includes(word) ? prod : undefined;
		});
	});
	setProducts(productsSearched);

	productsSearched.every((item) => item === undefined)
		? setExist(false)
		: setExist(true);

	setTimeout(() => {
		setLoader(false);
	}, 1500);
}
export default getProductsSearched;
