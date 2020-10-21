import React from 'react';
import styled from 'styled-components';

import Layout from 'utils/layout';
import GridView from 'utils/grid-view';
import SEO from 'utils/seo';

const StyledSection = styled.section`
  line-height: 1.5;
  margin: 5rem;
  li {
    font-size: ${({ theme: { base } }) => base.fontSize.m};
    & *:not(h5) {
      font-size: ${({ theme: { base } }) => base.fontSize.m};
    }
  }
  h5 {
    font-size: ${({ theme: { base } }) => base.fontSize.m};
    text-align: left;
  }
  h2 {
    font-size: ${({ theme: { base } }) => base.fontSize.xl};
  }
`;

const StyledOL = styled.ol`
  font-size: ${({ theme: { base } }) => base.fontSize.m};
`;

const StyledLink = styled.a`
  color: ${({ theme: { base } }) => base.accent.primary};
  text-decoration: underline;
`;

const MainLi = styled.li`
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
`;
const AsideLi = styled.li`
  font-weight: ${({ theme: { base } }) => base.fontWeight.thin};
`;

const FinalInfo = styled.p`
  grid-column: 2 / 3;
  padding: 2rem 5rem;
`;

const PrivacyPolicy = ({ location }) => (
  <Layout location={location}>
    <SEO title='Privacy Policy' image='logo' />
    <GridView>
      <StyledSection>
        <h2>Polityka prywatności / Privacy policy</h2>
        <StyledOL>
          <MainLi>
            <h5>Informacje ogólne</h5>
            <ol>
              <AsideLi>
                Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <StyledLink href='https://mateuszgruzla.pl/'>https://mateuszgruzla.pl/</StyledLink>
              </AsideLi>
              <AsideLi>Operatorem serwisu oraz Administratorem danych osobowych jest: Mateusz Gruźla, Bielawa 58-260, Os. XXV-Lecia 21/20.</AsideLi>
              <AsideLi>
                Adres kontaktowy poczty elektronicznej operatora:
                <strong> mat.gruzla@gmail.com</strong>
              </AsideLi>
              <AsideLi>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie. </AsideLi>
              <AsideLi>
                Serwis wykorzystuje dane osobowe w następujących celach:
                <ul>
                  <AsideLi>Prowadzenie systemu komentarzy </AsideLi>
                  <AsideLi>Obsługa zapytań przez formularz </AsideLi>
                  <AsideLi>Prezentacja oferty lub informacji </AsideLi>
                </ul>
              </AsideLi>
              <AsideLi>
                Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                <ul>
                  <AsideLi>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</AsideLi>
                  <AsideLi>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</AsideLi>
                </ul>
              </AsideLi>
            </ol>
          </MainLi>
          <MainLi>
            <h5>Wybrane metody ochrony danych stosowane przez Operatora </h5>
            <ol>
              <AsideLi>
                Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na
                stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.{' '}
              </AsideLi>
              <AsideLi>Operator okresowo zmienia swoje hasła administracyjne. </AsideLi>
              <AsideLi>
                Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w
                szczególności oznacza regularne aktualizacje komponentów programistycznych.{' '}
              </AsideLi>
            </ol>
          </MainLi>
          <MainLi>
            <h5>Hosting</h5>
            <ol>
              <AsideLi>Serwis jest hostowany na serwera operatora: netlify.com </AsideLi>
            </ol>
          </MainLi>
          <MainLi>
            <h5>Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h5>
            <ol>
              <AsideLi>
                W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do
                zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
                <ul>
                  <AsideLi>firma hostingowa na zasadzie powierzenia </AsideLi>
                  <AsideLi>operatorzy pocztowi </AsideLi>
                  <AsideLi>operatorzy systemu komentarzy </AsideLi>
                  <AsideLi>upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony </AsideLi>
                </ul>
              </AsideLi>
              <AsideLi>
                Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np.
                o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.{' '}
              </AsideLi>
              <AsideLi>
                Przysługuje Ci prawo żądania od Administratora:
                <ul>
                  <AsideLi>dostępu do danych osobowych Ciebie dotyczących, </AsideLi>
                  <AsideLi>ich sprostowania, </AsideLi>
                  <AsideLi>usunięcia, </AsideLi>
                  <AsideLi>ograniczenia przetwarzania, </AsideLi>
                  <AsideLi>oraz przenoszenia danych.</AsideLi>
                </ul>
              </AsideLi>
              <AsideLi>
                Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c. wobec przetwarzania danych osobowych w celu wykonania prawnie
                uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia
                ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony
                roszczeń.
              </AsideLi>
              <AsideLi>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa. </AsideLi>
              <AsideLi>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu. </AsideLi>
              <AsideLi>
                W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach
                zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.{' '}
              </AsideLi>
              <AsideLi>
                Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii
                Europejskiej.{' '}
              </AsideLi>
            </ol>
          </MainLi>
          <MainLi>
            <h5>Informacje w formularzach </h5>
            <ol>
              <AsideLi>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane. </AsideLi>
              <AsideLi>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP). </AsideLi>
              <AsideLi>
                Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim
                wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.{' '}
              </AsideLi>
              <AsideLi>
                Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub
                kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.{' '}
              </AsideLi>
            </ol>
          </MainLi>
          <MainLi>
            <h5>Informacja o plikach cookies </h5>
            <ol>
              <AsideLi>Serwis korzysta z plików cookies. </AsideLi>
              <AsideLi>
                Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
                przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na
                urządzeniu końcowym oraz unikalny numer.{' '}
              </AsideLi>
              <AsideLi>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</AsideLi>
              <AsideLi>
                Pliki cookies wykorzystywane są w następujących celach:
                <ul>
                  <AsideLi>
                    utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;
                  </AsideLi>
                  <AsideLi>realizacji celów określonych powyżej w części - Istotne techniki marketingowe ; </AsideLi>
                </ul>
              </AsideLi>
              <AsideLi>
                W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami
                tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania
                (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu
                ich usunięcia przez Użytkownika.
              </AsideLi>
              <AsideLi>
                Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym
                Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także
                automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.
              </AsideLi>
              <AsideLi>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</AsideLi>
              <AsideLi>
                Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w
                szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).{' '}
              </AsideLi>
            </ol>
          </MainLi>
          <MainLi>
            <h5>Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę? </h5>
            <ol>
              <AsideLi>
                Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla
                procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www{' '}
              </AsideLi>
              <AsideLi>
                W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:
                <ul>
                  <li>
                    <StyledLink href='https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history' target='_blank' rel='noreferrer'>
                      Edge
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href='https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer' target='_blank' rel='noreferrer'>
                      Internet Explorer
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href='https://support.google.com/chrome/answer/95647?hl=pl' target='_blank' rel='noreferrer'>
                      Chrome
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href='https://support.apple.com/pl-pl/guide/safari/sfri11471/mac' target='_blank' rel='noreferrer'>
                      Safari
                    </StyledLink>{' '}
                  </li>
                  <li>
                    <StyledLink
                      href='https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Firefox
                    </StyledLink>{' '}
                  </li>
                  <li>
                    <StyledLink href='https://help.opera.com/pl/latest/web-preferences/#cookies' target='_blank' rel='noreferrer'>
                      Opera
                    </StyledLink>{' '}
                  </li>
                </ul>
              </AsideLi>
              <AsideLi>
                Urządzenia mobilne:
                <ul>
                  <li>
                    <StyledLink href='https://support.google.com/chrome/answer/95647?hl=pl' target='_blank' rel='noreferrer'>
                      Android
                    </StyledLink>{' '}
                  </li>
                  <li>
                    <StyledLink href='https://support.apple.com/pl-pl/HT201265' target='_blank' rel='noreferrer'>
                      Safari (iOS)
                    </StyledLink>{' '}
                  </li>
                  <li>
                    <StyledLink href='https://support.microsoft.com/pl-pl/help/11696/windows-phone-7' target='_blank' rel='noreferrer'>
                      Windows Phone
                    </StyledLink>
                  </li>
                </ul>
              </AsideLi>
            </ol>
          </MainLi>
        </StyledOL>
      </StyledSection>
      <FinalInfo>W razie pytań prosimy o bezpośredni kontakt na wskazane powyżej dane kontaktowe.</FinalInfo>
    </GridView>
  </Layout>
);

export default PrivacyPolicy;
