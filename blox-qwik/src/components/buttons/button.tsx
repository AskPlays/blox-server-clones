import { component$, useStylesScoped$, Slot, $ } from '@builder.io/qwik';

export default component$<{className: string}>(({className}) => {
  const click = $(() =>{
    console.log('clicked');
  });
  return (
    <button onClick$={click} className={"cursor-pointer text-sm p-2 mb-0.5 block duration-100 bg-purple-800 hover:bg-purple-500 rounded-lg "+(className ?? '')}>
      <Slot/>
    </button>
  );
});
