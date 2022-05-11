import Swal from "sweetalert2";

export const Toast = Swal.mixin({
	toast: true,
	position: "top-right",
	iconColor: "white",
	customClass: {
		popup: "colored-toast",
	},
	showConfirmButton: false,
	timer: 1000,
	timerProgressBar: true,
});

export const Toast2 = Swal.mixin({
	toast: true,
	position: "top-left",
	iconColor: "white",
	customClass: {
		popup: "colored-toast",
	},
	showConfirmButton: false,
	timer: 1000,
	timerProgressBar: true,
});
