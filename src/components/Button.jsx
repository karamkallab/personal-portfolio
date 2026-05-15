export const Button = ({ className = "", size = "default", children, ...props }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white hover:opacity-90 shadow-lg shadow-primary/25";
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size] ?? sizeClasses.default} ${className}`;
    return (
        <button {...props} className={classes} style={{ background: "linear-gradient(90deg, #4f8ef7, #a855f7)", ...props.style }}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};