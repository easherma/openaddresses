/**
 * @file The main entry point for the OpenAddresses importer's unit-tests.
 */

'use strict';

require( './parameters' );
require( './isValidCsvRecord' );
require( './createPeliasElasticsearchPipeline' );
require( './importPipelines_functional' );
