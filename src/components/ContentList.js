import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import Titles from "./Titles";
import Link from "./Link";
import Dates from "./Dates";
import Size from "./Sizes";
import Seeders from "./Seeders";
import Leachers from "./Leachers";
import Completed from "./CompletedDownloads";


const contents = [
  { series: 'One Piece'          , categ: 'Anime', link: 'Magnet', size: '1.2 GiB',
    date: '2022-04-23 12:31'     , seed: '1234'  , leach: '123'  , cd: '2345'}, 

  { series: 'Conteudo Duvidoso'  , categ: 'Manga', link: 'Download', size: '1.2 GiB',
    date: '2022-02-23 18:30'     , seed: '5678'  , leach: '1'  , cd: '234' },

  { series: 'Spy x Family'       , categ: 'Manga', link: 'Magnet', size: '1.2 GiB',
    date: '2021-04-23 20:41'     , seed: '100'  , leach: '8'  , cd: '235' },

  { series: 'Shingeki'           , categ: 'Anime', link: 'Magnet', size: '1.2 GiB',
    date: '2022-02-23 10:25'     , seed: '12'  , leach: '75'  , cd: '345' },

  { series: 'Ya Boi Kongming'    , categ: 'Manga', link: 'Download', size: '1.2 GiB',
    date: '2021-01-23 16:10'     , seed: '30'  , leach: '789'  , cd: '2000' },
  
  { series: 'Ainda mais Duvidoso', categ: 'Software', link: 'Magnet', size: '1.2 GiB',
    date: '2021-12-23 11:00'     , seed: '2'  , leach: '654'  , cd: '10000' },
  
    { series: 'One Piece'          , categ: 'Anime', link: 'Magnet', size: '1.2 GiB',
    date: '2022-04-23 12:31'     , seed: '1234'  , leach: '123'  , cd: '2345'}, 

  { series: 'Conteudo Duvidoso'  , categ: 'Manga', link: 'Download', size: '1.2 GiB',
    date: '2022-02-23 18:30'     , seed: '5678'  , leach: '1'  , cd: '234' },

  { series: 'Spy x Family'       , categ: 'Manga', link: 'Magnet', size: '1.2 GiB',
    date: '2021-04-23 20:41'     , seed: '100'  , leach: '8'  , cd: '235' },

  { series: 'Shingeki'           , categ: 'Anime', link: 'Magnet', size: '1.2 GiB',
    date: '2022-02-23 10:25'     , seed: '12'  , leach: '75'  , cd: '345' },

  { series: 'Ya Boi Kongming'    , categ: 'Manga', link: 'Download', size: '1.2 GiB',
    date: '2021-01-23 16:10'     , seed: '30'  , leach: '789'  , cd: '2000' },
  
  { series: 'Ainda mais Duvidoso', categ: 'Software', link: 'Magnet', size: '1.2 GiB',
    date: '2021-12-23 11:00'     , seed: '2'  , leach: '654'  , cd: '10000' }
];


const Table = styled.table`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.tr`

  display: flex;
  width: 94%;
  justify-content: space-arround;

  :nth-child(even) {
    background-color: #F9F9F9;
  }

`;

const TdCol = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  border-color: rgb(221, 221, 221);
  padding: 10px;
  width: 100%;
  justify-content: center;
`;

const TdNome = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  border-color: rgb(221, 221, 221);
  padding: 10px;
  width: 400%;
  text-align: left;
`;



const ContentList = () => (
  <Table>
    <TableRow>
      <TdCol>Category</TdCol>
      <TdNome>Name</TdNome>
      <TdCol>Link</TdCol>
      <TdCol>Size</TdCol>
      <TdCol>Date</TdCol>
      <TdCol>Seeders</TdCol>
      <TdCol>Leachers</TdCol>
      <TdCol>Completed Downloads</TdCol>
    </TableRow>
    
    {contents.map ( (contents) => (
      <TableRow>
        <TdCol> < Categories category={contents.categ} /> </TdCol>
        <TdNome> < Titles title={contents.series} /> </TdNome>
        <TdCol> < Link link={contents.link} /> </TdCol>
        <TdCol> < Size size={contents.size} /> </TdCol>
        <TdCol> < Dates date={contents.date} /> </TdCol>
        <TdCol> < Seeders seed={contents.seed} /> </TdCol>
        <TdCol> < Leachers leach={contents.leach} /> </TdCol>
        <TdCol> < Completed cd={contents.cd} /> </TdCol>
      </TableRow>
    ))}

  </Table>
);

export default ContentList;