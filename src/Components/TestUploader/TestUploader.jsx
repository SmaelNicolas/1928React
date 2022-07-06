import React, { useEffect, useState } from "react";
import { storage } from "../../Firebase/Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import "./testUploader.css";

export const TestUploader = () => {
	const [imageUpload, setImageUpload] = useState(null);
	const [imageList, setImageList] = useState([]);

	useEffect(() => {
		listAll(imageListRef).then((result) =>
			result.items.forEach((item) =>
				getDownloadURL(item).then((url) => {
					setImageList((prev) => [...prev, url]);
				})
			)
		);
	}, []);

	const imageListRef = ref(storage, "jeans/");
	const uploadImage = () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `jeans/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				setImageList((prev) => [...prev, url]);
			});
			alert("image Uploaded");
		});
	};
	// const uploadImage = () => {
	// 	if (imageUpload == null) return;
	// 	const imageRef = ref(storage, `jeans/${imageUpload.name + v4()}`);
	// 	uploadBytes(imageRef, imageUpload).then(() => {
	// 		alert("image Uploaded");
	// 	});
	// };
	return (
		<div className='upContainer'>
			<input
				type='file'
				onChange={(e) => setImageUpload(e.target.files[0])}
			/>
			<button onClick={uploadImage}>UPLOAD IMG</button>
			{imageList.map((url, index) => {
				return (
					<img
						className='imagetestt'
						src={url}
						alt='test'
						key={index}
					/>
				);
			})}
		</div>
	);
};
