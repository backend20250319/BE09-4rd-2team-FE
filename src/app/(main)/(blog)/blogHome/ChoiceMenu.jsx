export default function ChoiceMenu({categories, selected, onSelect}) {
    const styles = {
        menu: {
            display: "flex",
            gap: "24px",
            borderBottom: "2px solid #ddd",
            borderTop: "2px solid #ddd",
            padding: "16px 0",
            margin: "16px"
        }
    };


    return(
        <div style={styles.menu}>
            {categories.map(category => (
                <span
                    key={category}
                    onClick={() => onSelect(category)}
                    className={selected === category ? "active" : ""}
                    style={{ color : selected === category ? "green" : "black",
                        fontWeight: selected === category ? "bold" : "normal",
                    cursor: "pointer"}}>
                    {category}
                </span>
            ))}
        </div>
    );
}