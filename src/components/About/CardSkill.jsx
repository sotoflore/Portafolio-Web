import IconCheck from "../icons/IconCheck";

const CardSkill = ({ lists }) => {

  return (
    <div >
      {lists.map((list, index) => (
        <div key={index}>
          <h3 className="text-white">{list.title}</h3>
          <ul className="max-w-md space-y-1 text-gray-400 list-inside p-2">
            {list.items.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <IconCheck />{item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default CardSkill;