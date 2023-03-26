// testRef: React.RefObject<Record<string, HTMLInputElement>>;
// constructor(props: Props) {
//   super(props);
//   this.testRef = React.createRef<Record<string, HTMLInputElement>>();
//   this.testRef = { current: {} };
// }

// setRef = (el: HTMLInputElement | null) => {
//   if (this.testRef.current && el) {
//     this.testRef.current[el.name] = el;
//   }
// };

// type inputRefs = Record<string, HTMLInputElement>;

//  manyInputRefs = React.createRef<inputRefs>();
//  selectRef = React.createRef<HTMLSelectElement>();

// setInputsRef = (input: HTMLInputElement) => {
//   const current = { ...this.manyInputRefs.current, [input.name]: input };
//   this.manyInputRefs = { current };
// };

export {};
