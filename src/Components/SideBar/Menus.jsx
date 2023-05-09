import { ItemMenu } from "./ItemMenu";
export const Menus = ({ mas, expanded, dropDown, dropDownList }) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
        minHeight: "320px",
        marginTop: "31px",
        marginBottom: "0px",
        padding: "0px 0px",
        width: "228px",
      }}
    >
      {mas.map((obj) => {
        return (
          <ItemMenu
            key={obj.id}
            {...obj}
            expanded={expanded}
            dropDown={dropDown}
            isDropDown={dropDownList.includes(obj.id)}
          />
        );
      })}
    </ul>
  );
};
