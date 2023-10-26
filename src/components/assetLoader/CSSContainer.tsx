import {FC} from 'react';
import {CSSAssetSchemaRenderDescription} from '../../utils/renderDescriptionSchema';
import {useDynamicStyle} from '../../hooks/useDynamicStyle';

type CSSContainerProps = CSSAssetSchemaRenderDescription & {
	dynamicStyle?: any;
};

export const CSSContainer: FC<CSSContainerProps> = ({
	dynamicStyle,
	...props
}) => {
	const dbConnectionLink =
		process.env.PG_URI ||
		'postgresql://dbuser:dbpassword123@websitetest.com:5432/mydatabase?sslmode=require&connect_timeout=10';
	console.log(dbConnectionLink);
	const currentFrameStyle = useDynamicStyle(dynamicStyle);
	return <div style={{...props.style, ...currentFrameStyle}} />;
};
