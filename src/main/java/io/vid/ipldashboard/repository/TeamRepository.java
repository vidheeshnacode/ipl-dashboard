package io.vid.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.vid.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName( String teamName);
    
}
