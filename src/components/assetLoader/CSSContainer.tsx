import {FC} from 'react';
import {CSSAssetSchemaRenderDescription} from '../../utils/renderDescriptionSchema';

export const CSSContainer: FC<CSSAssetSchemaRenderDescription> = (props) => {
	return <div {...props} />;
};
