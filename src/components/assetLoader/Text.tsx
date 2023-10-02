import {FC} from 'react';
import {TextAssetSchemaRenderDescription} from '../../utils/renderDescriptionSchema';

export const Text: FC<TextAssetSchemaRenderDescription> = (props) => {
	return <span style={props.style}>{props.text}</span>;
};
