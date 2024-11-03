

interface AddConsiderationButtonProps {
  onClick?: () => void; // Define the onClick prop as an optional function
}

const AddConsiderationButton: React.FC<AddConsiderationButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-full py-5 text-black bg-transparent border-2 border-black border-dashed rounded-[6px]"
      onClick={onClick} // Pass the onClick prop to the button
    >
      Let's add a consideration!
    </button>
  );
};

export default AddConsiderationButton;
