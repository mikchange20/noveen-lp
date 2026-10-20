# Noveen – landing page

Zwykła strona HTML (bez instalowania czegokolwiek), publikowana przez GitHub Pages.

## Gdzie są wersje

| Wersja | Adres | Pliki w repo | Zasady |
|---|---|---|---|
| **v1** – wersja wysłana firmie | https://mikchange20.github.io/noveen-lp/ | `index.html`, `css/`, `js/`, `assets/` (w głównym folderze) | **Nie zmieniać.** |
| **v2** – wersja robocza do testów | https://mikchange20.github.io/noveen-lp/v2/ | wszystko w folderze `v2/` | Tu wprowadzamy wszystkie poprawki. |

Folder `v2/` to pełna, niezależna kopia (własne `css/`, `js/`, `assets/`), więc zmiany w v2 nie ruszają v1.

### v2 = Lunchee Iceland (wg briefu LUNCHEE_IS_LP_brief.md)

Jedna strona, 4 wersje dla różnych odbiorców – każda ma swój adres:

| Odbiorca | Adres |
|---|---|
| Wypożyczalnie (domyślna) | https://mikchange20.github.io/noveen-lp/v2/rentals |
| Ekipy budowlane | https://mikchange20.github.io/noveen-lp/v2/crews |
| Kierowcy i floty | https://mikchange20.github.io/noveen-lp/v2/drivers |
| Sklepy | https://mikchange20.github.io/noveen-lp/v2/stores |

- Teksty wspólne są w `v2/index.html`, teksty 4 wersji (sekcje: Why, How, Questions, formularz) w `v2/js/content.js`.
- Kolory i czcionka – na górze `v2/css/style.css` (zmienne `--navy`, `--accent`, `--font`).
- Formularz wysyła ukryte pole `segment` (rentals / crews / drivers / stores).
- Języki: EN i PL (przełącznik w nagłówku; link z `?lang=pl` otwiera od razu po polsku, np. `.../v2/crews?lang=pl`).
  Wszystkie teksty PL są w `v2/js/content.js` (`LUNCHEE_COPY.pl` – 4 wersje, `LUNCHEE_SHARED.pl` – część wspólna).
- Wersja IS: przycisk pojawi się sam, gdy dodamy tłumaczenia (`LUNCHEE_COPY.is` i `LUNCHEE_SHARED.is` w `content.js`).

Oryginał, którego link poszedł mailem do firmy, jest na koncie Natalii:
https://nataliajagus.github.io/noveen-lp/ – tego repozytorium nie ruszamy.

## Jak wprowadzać zmiany

1. Edytuj pliki w folderze `v2/` (np. `v2/index.html`, `v2/css/style.css`, obrazki w `v2/assets/img/`).
2. Podgląd lokalnie: otwórz `v2/index.html` w przeglądarce.
3. Najprościej: poproś Claude w rozmowie „Noveen LP” o zmianę – zrobi ją i opublikuje.

## Jak publikować

Każdy push na gałąź `main` publikuje stronę – zmiany są widoczne po ok. 1 minucie
(czasem trzeba odświeżyć stronę z Shift, żeby przeglądarka nie pokazywała starej wersji).

```bash
git add -A
git commit -m "Opis zmiany"
git push
```

Postęp publikacji: zakładka **Actions** w repozytorium na GitHubie.
