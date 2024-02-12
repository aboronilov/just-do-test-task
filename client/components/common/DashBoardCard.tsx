import Spinner from "./Spinner";

type Props = {
    type: string,
    quantity: number,
    isLoading: boolean
}

const DashboardCard = ({ type, quantity, isLoading }: Props) => {
    if (isLoading) {
        return (
            <div className='flex justify-center mt-8'>
                <Spinner lg />
            </div>
        )

    }
    return (
        <div className="p-5 flex gap-5">
            <div className="flex flex-row bg-secondary px-4 py-2 rounded-md">
                <div>
                    <span className="text-orange-500 mr-4 capitalize">{type}</span>
                    messages:
                    <span className="text-orange-500 ml-4 font-bold">{quantity}</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;