"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.heroesUrl = '/api/player'; // URL to web api
        this.listeUrl = "http://localhost:8000";
        if (window.location.href.startsWith(this.listeUrl)) {
            this.heroesUrl = "http://localhost:3000" + this.heroesUrl;
        }
    }
    TeamService.prototype.getPlayers = function (teamName) {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.getPlayer = function (name) {
        return this.getPlayers('merode')
            .then(function (players) { return players.filter(function (player) { return player.name === name; })[0]; });
    };
    TeamService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBR3JDO0lBSUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBRSxpQkFBaUI7UUFDN0MsYUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBRXpDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxRQUFlO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3hCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQXBCLENBQW9CLENBQUM7YUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLElBQVk7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUdPLGlDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUEzQkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTRCYixrQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksbUJBQVcsY0EyQnZCLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL3RlYW0uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQbGF5ZXIgfSBmcm9tICcuLi9tb2RlbC9JUGxheWVyJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlYW1TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBoZXJvZXNVcmwgPSAnL2FwaS9wbGF5ZXInOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICBwcml2YXRlIGxpc3RlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aCh0aGlzLmxpc3RlVXJsKSl7XHJcbiAgICAgIHRoaXMuaGVyb2VzVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiArIHRoaXMuaGVyb2VzVXJsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGxheWVycyh0ZWFtTmFtZTpzdHJpbmcpOlByb21pc2U8SVBsYXllcltdPntcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaGVyb2VzVXJsKVxyXG4gICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpLmRhdGEpXHJcbiAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldFBsYXllcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBsYXllcnMoJ21lcm9kZScpXHJcbiAgICAgICAgICAgICAgIC50aGVuKHBsYXllcnMgPT4gcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5uYW1lID09PSBuYW1lKVswXSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
