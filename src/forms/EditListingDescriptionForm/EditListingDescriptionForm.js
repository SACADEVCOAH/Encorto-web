import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button, FieldTextInput, FieldSelect } from '../../components';
import CustomCategorySelectFieldMaybe from './CustomCategorySelectFieldMaybe';

import css from './EditListingDescriptionForm.module.css';

const TITLE_MAX_LENGTH = 60;

const EditListingDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        categories,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        values,
      } = formRenderProps;

      const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        { maxLength: TITLE_MAX_LENGTH }
      );

      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionPlaceholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionRequired',
      });

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      const categoryKey = (values?.category || '').toLowerCase();

      const isRestaurants = categoryKey === 'restaurantes';
      const isFerreterias = categoryKey === 'ferreterias';
      const isSupermercados = categoryKey === 'supermercados';
      const isServicios = categoryKey === 'servicios';
      const isPapeleria = categoryKey === 'papeleria';
      const isElectronica = categoryKey === 'electronica';

      // Mensajes simples (si no tienes translations todavía)
      const reqMsg = txt => txt;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}

          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus
          />

          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
          />

          <CustomCategorySelectFieldMaybe
            id="category"
            name="category"
            categories={categories}
            intl={intl}
          />

          {/* ✅ RESTAURANTES */}
          {isRestaurants ? (
            <FieldSelect
              id="foodType"
              name="foodType"
              label="Tipo de comida"
              validate={required(reqMsg('Selecciona el tipo de comida'))}
            >
              <option value="">Selecciona una opción</option>
              <option value="pollo_frito">Pollo frito</option>
              <option value="tacos">Tacos</option>
              <option value="hamburguesas">Hamburguesas</option>
              <option value="pizza">Pizza</option>
              <option value="sushi">Sushi</option>
              <option value="mariscos">Mariscos</option>
              <option value="snacks">Snacks</option>
            </FieldSelect>
          ) : null}

          {/* ✅ FERRETERÍAS (hardwareType) */}
          {isFerreterias ? (
            <FieldSelect
              id="hardwareType"
              name="hardwareType"
              label="Tipo de ferretería"
              validate={required(reqMsg('Selecciona el tipo de ferretería'))}
            >
              <option value="">Selecciona una opción</option>
              <option value="general">General</option>
              <option value="industrial">Industrial</option>
              <option value="plomeria">Plomería</option>
              <option value="electrica">Eléctrica</option>
              <option value="construccion">Construcción</option>
              <option value="pinturas">Pinturas</option>
              <option value="aceros_y_perfiles">Aceros y Perfiles</option>
            </FieldSelect>
          ) : null}

          {/* ✅ SUPERMERCADOS (marketType) */}
          {isSupermercados ? (
            <FieldSelect
              id="marketType"
              name="marketType"
              label="Tipo de supermercado"
              validate={required(reqMsg('Selecciona el tipo de supermercado'))}
            >
              <option value="">Selecciona una opción</option>
              <option value="abarrotes">Abarrotes</option>
              <option value="mini_super">Mini super</option>
              <option value="carniceria">Carnicería</option>
              <option value="fruteria">Frutería</option>
              <option value="24_horas">24 horas</option>
            </FieldSelect>
          ) : null}

          {/* ✅ SERVICIOS (serviceType) */}
          {isServicios ? (
            <FieldSelect
              id="serviceType"
              name="serviceType"
              label="Tipo de servicio"
              validate={required(reqMsg('Selecciona el tipo de servicio'))}
            >
              <option value="">Selecciona una opción</option>
              <option value="envios_locales">Envíos locales</option>
              <option value="recolecciones_locales">Recolecciones Locales</option>
            </FieldSelect>
          ) : null}

          {/* ✅ PAPELERÍA (OJO: tu ID en Console es Tipodepapeleria) */}
          {isPapeleria ? (
            <FieldSelect
              id="Tipodepapeleria"
              name="Tipodepapeleria"
              label="Tipo de papelería"
              validate={required(reqMsg('Selecciona el tipo de papelería'))}
            >
              <option value="">Selecciona una opción</option>
              <option value="escolar">Escolar</option>
              <option value="oficina">Oficina</option>
              <option value="impresiones">Impresiones</option>
              <option value="arte">Arte</option>
            </FieldSelect>
          ) : null}

          {/* ✅ ELECTRÓNICA (OJO: tu ID en Console es Tipodeelectronica) */}
          {isElectronica ? (
            <FieldSelect
              id="Tipodeelectronica"
              name="Tipodeelectronica"
              label="Tipo de electrónica"
              validate={required(reqMsg('Selecciona el tipo de electrónica'))}
            >
              <option value="">Selecciona una opción</option>
              <option value="accesorios_celulares">Accesorios Celulares</option>
              <option value="computacion">Computación</option>
            </FieldSelect>
          ) : null}

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDescriptionFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
