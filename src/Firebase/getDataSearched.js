import { collection, getDocs } from "firebase/firestore";
import database from "./Firebase";

async function getProductsSearched(setProducts, setLoader, query, setExist) {
	setLoader(true);
	const productsCollection = collection(database, "productos");
	const productDocs = await getDocs(productsCollection);
	const products = productDocs.docs.map((prod) => ({
		id: prod.id,
		...prod.data(),
	}));

	const queryWordsArray = query.split(" ");
	//busca y devuelve un array por cada palabra
	const productsSearched = queryWordsArray.map((word) => {
		return products.map((prod) => {
			return prod.description.includes(word) ? prod : undefined;
		});
	});
	let arrayComplete = [];
	//recorre todos los arreglos de todas las palabras y guarda los que son distintos de undefined en un nuevo arreglo
	productsSearched.map((array) =>
		array.map((prod) => prod !== undefined && arrayComplete.push(prod))
	);
	//elimina todos los duplicados del nuevo arreglo para devolver valores unicos y existentes
	let uniqueProductsArray = [...new Set(arrayComplete)];

	setProducts(uniqueProductsArray);

	//si hay un elemento existe un resultado para renderizar
	uniqueProductsArray.length > 0 ? setExist(true) : setExist(false);

	setTimeout(() => {
		setLoader(false);
	}, 1500);
}
export default getProductsSearched;
