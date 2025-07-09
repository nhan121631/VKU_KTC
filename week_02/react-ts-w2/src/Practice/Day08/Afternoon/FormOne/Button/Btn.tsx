type Props = {
  label: string;
};
export const Button = ({ label }: Props) => {
  return (
    <div className="flex items-center gap-4 bg-emerald-500 p-4 rounded-lg w-full justify-center">
      <span className="text-white font-semibold">{label}</span>
    </div>
  );
};
