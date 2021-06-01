# svelte-dob-picker

> Simple Lightweight Svelte DOB Picker

### Demo

[svelte-dob-picker](https://svelte.dev/repl/20876be005fe487b9ec03216f4340a47?version=3.38.2)

## Installation

```bash
npm install svelte-dob-picker
```

or

```bash
yarn add svelte-dob-picker
```

**Note:** Install as a dev dependency (yarn add -D svelte-dob-picker) if using [Sapper](https://sapper.svelte.dev/) to avoid a SSR error.

### Usage

```svelte
<SvelteDOBPicker 
  selectedDOB={initialDate} 
  on:dateChange={(e) => {
    dateFromDOBPicker = e.detail;
    }} 
/>

<script>
  import SvelteDOBPicker from "svelte-dob-picker";
  const initialDate = new Date();
  let dateFromDOBPicker = new Date();
</script>
```

### Styling

- `height: String` Default: `40px`. Height of each DOB box.
- `borderRadius: String` Default: `5px`. Border Radius of each DOB box.
- `borderColor: String` Default: `gray`. Color of the borders.
- `textColor: String` Default: `black`. Text Color.
- `borderWidth: String` Default: `2px`. Width of the borders.
- `bgColor: String` Default: `white`. Background Color of the box.

```html
<script>
  import SvelteDOBPicker from "svelte-dob-picker";
  const initialDate = new Date();
  let dateFromDOBPicker = new Date();
</script>

<SvelteDOBPicker 
  height="50px"
  borderRadius="8px"
  borderColor="#fc0324"
  textColor="white"
  borderWidth="2px"
  bgColor="black"
  selectedDOB={initialDate} 
  on:dateChange={(e) => {
    dateFromDOBPicker = e.detail;
  }} 
/>
```

## License

[MIT](LICENSE)