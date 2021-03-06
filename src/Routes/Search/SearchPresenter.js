import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  TVResults,
  loading,
  searchTerm,
  error
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  TVResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
