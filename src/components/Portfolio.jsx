import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projectsData from '../data/projects';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
  }

  getFilters() {
    const categories = projectsData.map(project => project.category);
    const uniqueCategories = [...new Set(categories)];
    return ['All', ...uniqueCategories];
  }

  handleSelectFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  getFilteredProjects() {
    const { selectedFilter } = this.state;
    if (selectedFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.category === selectedFilter);
  }

  render() {
    const { selectedFilter } = this.state;
    const filters = this.getFilters();
    const filteredProjects = this.getFilteredProjects();

    return (
      <div className="portfolio-container">
        <h1 className="portfolio-title">Портфолио</h1>
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;