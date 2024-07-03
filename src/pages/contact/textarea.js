import useTheme from "@/hook/theme";

export default function Textarea() {
  const [theme, toggleTheme] = useTheme();

  const labelClassNames = `block text-sm font-medium leading-6 text-accent mb-2 ${
    theme === "light" ? "text-black" : "text-accent"
  }`;
  
  return (
    <div>
      <label htmlFor="comment" className={labelClassNames}>
        Tell me about
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border border-gray-300 bg-transparent py-1.5 pl-10 text-accent ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
