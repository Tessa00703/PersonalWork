import React from "react";
/* We simply can use an array and loop and print each user */
const MembersPage = () => {
  return (
    <div>
      <ul>
        {["Thorsten", "Tessa", "Rihan"].map((member, idx) => {
          return <li key={idx}>{member}</li>;
        })}
      </ul>
    </div>
  );
};

export default MembersPage;
