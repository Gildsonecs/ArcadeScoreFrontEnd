import { Component, OnInit } from '@angular/core';
import { RankingService } from '../services/ranking.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

export class RankingComponent implements OnInit {
  ranking: any;

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.rankingService.getRanking().subscribe(data => {
      this.ranking = data;
      
    }, err => {
      console.log("Erro ao listar o ranking", err);
    })
  }
}
