export default function Item({ item, onDeleteItem, onToggleItems }) {
	return (
		<li>
			<input type='checkbox' onChange={() => onToggleItems(item.id)}></input>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	)
}
