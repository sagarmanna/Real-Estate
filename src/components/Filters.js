function Filters({ developer, setDeveloper, type, setType, resetFilters }) {
  return (
    <div className="filters">
      <select value={developer} onChange={(e) => setDeveloper(e.target.value)}>
        <option value="">Developer</option>
        <option value="Emaar Properties">Emaar Properties</option>
        <option value="Dubai Properties">Dubai Properties</option>
        <option value="Nakheel">Nakheel</option>
        <option value="Meraas">Meraas</option>
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Type</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Penthouse">Penthouse</option>
        <option value="Townhouse">Townhouse</option>
      </select>

      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}

export default Filters;