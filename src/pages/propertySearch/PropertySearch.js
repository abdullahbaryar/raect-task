import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  togglePropertySelection,
} from "../../redux/property/propertySlice";
import {
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import NoData from "../../components/nodata/NoData";

const PropertySearch = () => {
  const dispatch = useDispatch();
  const { properties, selectedProperties } = useSelector(
    (state) => state.properties
  );

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsType, setSearchResultsType] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setSearchQuery(searchInput));
    const filteredProperties = properties.filter(
      (property) =>
        property.address.includes(searchInput) &&
        (selectedProperties.length === 0 ||
          selectedProperties.includes(property.id))
    );
    setSearchResults(filteredProperties);
    setSearchResultsType(filteredProperties);
  };

  const handlePropertyToggle = (id) => {
    dispatch(togglePropertySelection(id));
  };

  const handleFilter = (id) => {
    const filteredArray = searchResults.filter((result) => result.type === id);
    setSearchResultsType(filteredArray);
  };
  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        p: "20px",
        width: { xs: "97%", md: "94%" },
        maxWidth: "1200px",
        m: "10rem auto",
      }}
    >
      <Typography variant="h1" sx={{ color: "#000" }}>
        Search
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          type="text"
          fullWidth
          placeholder="Search by address..."
          value={searchInput}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          sx={{ background: "#e4d215", color: "#000" }}
        >
          {searchInput === "" ? "Search All" : "Search"}
        </Button>
      </Box>
      <Typography variant="h1" sx={{ color: "#000" }}>
        Selected Result
      </Typography>
      {properties.filter((property) => selectedProperties.includes(property.id))
        .length === 0 ? (
        <NoData />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Address </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Postcode </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Type </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Number of Rooms </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Floor Area </Typography>{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {properties
                .filter((property) => selectedProperties.includes(property.id))
                .map((property) => (
                  <TableRow key={property.id}>
                    <TableCell>{property.address}</TableCell>
                    <TableCell>{property.postcode}</TableCell>
                    <TableCell>{property.type}</TableCell>
                    <TableCell>{property.numberOfRooms}</TableCell>
                    <TableCell>{property.floorArea}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Typography variant="h1" sx={{ color: "#000", mt: 3 }}>
        Search Result
      </Typography>
      {searchResultsType.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ color: "#000" }}>
            Filter by Property Type:
          </Typography>
          {["Flat", "Terraced house", "Semi-deteched"].map((type) => (
            <Box
              key={type}
              onClick={() => handleFilter(type)}
              sx={{ cursor: "pointer" }}
            >
              {type}
            </Box>
          ))}
        </Box>
      )}
      {searchResultsType.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Select</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Address</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Postcode</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Type</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Number of Rooms</Typography>{" "}
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Floor Area</Typography>{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResultsType.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedProperties.includes(property.id)}
                      onChange={() => handlePropertyToggle(property.id)}
                    />
                  </TableCell>
                  <TableCell>{property.address}</TableCell>
                  <TableCell>{property.postcode}</TableCell>
                  <TableCell>{property.type}</TableCell>
                  <TableCell>{property.numberOfRooms}</TableCell>
                  <TableCell>{property.floorArea}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoData />
      )}
    </Box>
  );
};

export default PropertySearch;
