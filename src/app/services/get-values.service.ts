import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetValuesService {
  constructor(private http: HttpClient) {}
  configUrl = "https://localhost:44358/api/values";
  sellersUrl = "https://localhost:44358/api/Sellers";

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getSellers() {
    return this.http.get(this.sellersUrl);
  }
}
