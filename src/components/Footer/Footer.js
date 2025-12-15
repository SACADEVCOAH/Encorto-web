import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.module.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;

  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>

          <div className={css.someLiksMobile}>{socialMediaLinks}</div>

          <div className={css.links}>

            {/* LOGO + DESCRIPCIÓN */}
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>

            {/* LINKS ABOUT/FAQ/HELP/CONTACTO */}
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink name="CMSPage" params={{ pageId: 'about' }} className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink
                    name="CMSPage"
                    params={{ pageId: 'preguntas-frecuentes' }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="CMSPage" params={{ pageId: 'ayuda' }} className={css.link}>
                    <FormattedMessage id="Footer.toHelpPage" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="CMSPage" params={{ pageId: 'contacto' }} className={css.link}>
                    <FormattedMessage id="Footer.toContactPage" />
                  </NamedLink>
                </li>
              </ul>
            </div>

            {/* BLOQUE 1 – CIUDADES PRINCIPALES */}
            <div className={css.searches}>
              <ul className={css.list}>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Sabinas%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchSabinas" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Nueva%20Rosita%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchNuevaRosita" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Muzquiz%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchMuzquiz" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Palau%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchPalau" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Las%20Esperanzas%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchLasEsperanzas" />
                  </NamedLink>
                </li>

              </ul>
            </div>

            {/* BLOQUE 2 – CIUDADES EXTRA */}
            <div className={css.searchesExtra}>
              <ul className={css.list}>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Barroteran%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchBarroteran" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Aura%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchAura" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Juarez%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchJuarez" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Presa%20Don%20Martin' }} className={css.link}>
                    <FormattedMessage id="Footer.searchPresaDonMartin" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Rancherias%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchRancherias" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Agujita%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchAgujita" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink name="SearchPage" to={{ search: '?address=Cloete%2C%20Coahuila' }} className={css.link}>
                    <FormattedMessage id="Footer.searchCloete" />
                  </NamedLink>
                </li>

              </ul>
            </div>

            {/* REDES & LEGAL */}
            <div className={css.extraLinks}>
              <div className={css.someLinks}>{socialMediaLinks}</div>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* MOBILE */}
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
