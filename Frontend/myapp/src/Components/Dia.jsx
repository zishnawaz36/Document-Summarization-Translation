function Dia() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex justify-center gap-8 p-4">
                <img 
                    src="/assets/rouge_comparison[1].png" 
                    alt="Rouge Comparison" 
                    className="w-1/3 h-auto rounded-lg shadow-md"
                />
                <img 
                    src="/assets/fig2.png" 
                    alt="Figure 2" 
                    className="w-1/3 h-auto rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}

export default Dia;
