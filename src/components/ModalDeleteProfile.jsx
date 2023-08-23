import "../styles/ModalDeleteProfile.css";

export function ModalDeleteProfile({
  classModalDeleteProfile,
  deleteProfile,
  hiddenModalDelete,
}) {
  return (
    <div className={classModalDeleteProfile}>
      <div className="Container__Content--Information--Profile--Delete--Modal">
        <b className="Container__Content--Information--Profile--Delete--Modal--Title">
          ¿ELIMINAR PERFIL?
        </b>
        <picture className="Container__Content--Information--Profile--Delete--Modal--Image">
          <img
            src="../../public/Modals/DeleteProfile.png"
            alt="Delete profile"
          />
        </picture>
        <p className="Container__Content--Information--Profile--Delete--Modal--Details">
          Esta acción eliminará tu perfil de manera irreversible y todos tus
          datos asociados se perderán permanentemente. Si estás seguro de esta
          decisión, por favor confirma la eliminación.
        </p>
        <span className="Container__Content--Information--Profile--Delete--Modal--Buttons">
          <button
            className="Container__Content--Information--Profile--Delete--Modal--Buttons--Cancel"
            onClick={hiddenModalDelete}
          >
            Cancelar
          </button>
          <button
            className="Container__Content--Information--Profile--Delete--Modal--Buttons--Confirm"
            onClick={deleteProfile}
          >
            Confirmar
          </button>
        </span>
      </div>
    </div>
  );
}
