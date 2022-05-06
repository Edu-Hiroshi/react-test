import React from "react";
import styled from "styled-components";

import Anime from "./categories/Anime.png";
import Manga from "./categories/Manga.png";
import Software from "./categories/Software.png";

const MarginBottom = styled.div`
  marginBotton: '15px'
`;

// <img src='public/${category}.png' alt="Category"/>

const Categories = ({ category }) => (
  <MarginBottom>
    {category === 'Anime' ? (
      <div>
        <img src={Anime} alt="Category"/>
      </div>
    ) : (
      
      category === 'Manga' ? (
        <div>
          <img src={Manga} alt="Category"/>
        </div>
      ) : (
        
        category === 'Software' ? (
          <div>
            <img src={Software} alt="Category"/>
          </div>
        ) : (
          <span>
            Sem categoria
          </span>
        )

      )

    )}
  </MarginBottom>
)

export default Categories