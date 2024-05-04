import Swal from "sweetalert2";
export const useDeleteProduct = () => {
  const processing = ref(false);
  const deleteProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };

  return { deleteProduct, processing };
};
